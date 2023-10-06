import * as React from 'react'

type BlockProps = {
    author: string,
    citedFrom?: string,
    content: string
}
export const BlockQuote = ({ author, citedFrom, content }: BlockProps) => (
  <blockquote className="font-sans">
    <p className="bg-slate-200 !text-slate-800 py-3 rounded-sm ">{content}</p>
    <footer>
      - {author}
      <cite className='break-words'>{citedFrom}</cite>
    </footer>
  </blockquote>
);