import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Hero from '@/components/home/hero'

describe('<Hero />', () => {
  it('has a hero image', () => {
    render(<Hero />)

    expect(screen.getByAltText('Hong')).toBeInTheDocument()
  })
})
