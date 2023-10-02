import * as React from 'react'

type BlockProps = {
    author: string,
    citedFrom?: string,
    content: string
}
export const BlockQuote = ({ author, citedFrom, content }: BlockProps) => (
  <blockquote className="font-sans">
    <p className="bg-slate-200 py-3 rounded-sm ">{content}</p>
    <footer>
      - {author}
      <cite>{citedFrom}</cite>
    </footer>
  </blockquote>
);