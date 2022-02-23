/* eslint-disable no-unsafe-optional-chaining */
import React, { useState, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

import useTranslation from "next-translate/useTranslation";
import siteMetadata from "@/data/siteMetadata";

interface Props {
  mapping: string;
}

interface Comment {
  repo: string;
  repositoryId: string;
  category: string;
  categoryId: string;
  mapping: string;
  reactions: string;
  metadata: string;
  theme: string;
  darkTheme: string;
  themeURL?: string;
  inputPosition: string;
  lang: string;
}

const Giscus = ({ mapping }: Props) => {
  const { locale } = useRouter();
  const { t } = useTranslation();
  const [enableLoadComments, setEnabledLoadComments] = useState(
    siteMetadata.comment.enableLoadComments,
  );
  const { theme, resolvedTheme } = useTheme();
  const commentsTheme =
    siteMetadata.comment.giscusConfig.themeURL === ""
      ? theme === "dark" || resolvedTheme === "dark"
        ? siteMetadata.comment.giscusConfig.darkTheme
        : siteMetadata.comment.giscusConfig.theme
      : siteMetadata.comment.giscusConfig.themeURL;

  const COMMENTS_ID = "comments-container";
  const LoadComments = useCallback(() => {
    setEnabledLoadComments(false);

    const {
      repo,
      repositoryId,
      category,
      categoryId,
      reactions,
      metadata,
      inputPosition,
      lang,
    }: Comment = siteMetadata?.comment?.giscusConfig;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", repo!);
    script.setAttribute("data-repo-id", repositoryId);
    script.setAttribute("data-category", category);
    script.setAttribute("data-category-id", categoryId);
    script.setAttribute("data-mapping", mapping);
    script.setAttribute("data-reactions-enabled", reactions);
    script.setAttribute("data-emit-metadata", metadata);
    script.setAttribute("data-input-position", inputPosition);
    script.setAttribute("data-lang", lang === "locale" ? locale : lang);
    script.setAttribute("data-theme", commentsTheme);
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    const comments = document.getElementById(COMMENTS_ID);
    if (comments) comments.appendChild(script);

    return () => {
      const comments = document.getElementById(COMMENTS_ID);
      if (comments) comments.innerHTML = "";
    };
  }, [commentsTheme, locale, mapping]);

  // Reload on theme change
  useEffect(() => {
    !enableLoadComments && LoadComments();
    const iframe = document.querySelector("iframe.giscus-frame");
    if (!iframe) return;
    enableLoadComments && LoadComments();
  }, [LoadComments, enableLoadComments]);

  return (
    <div className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300">
      {enableLoadComments && <button onClick={LoadComments}>{t("common:loadComments")}</button>}
      <div className="giscus" id={COMMENTS_ID} />
    </div>
  );
};

export default Giscus;