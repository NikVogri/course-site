import React from "react"

export default function navigation({ siteTitle }) {
  return (
    <nav>
      <div className="brand">
        <span>{siteTitle}</span>
      </div>
    </nav>
  )
}
