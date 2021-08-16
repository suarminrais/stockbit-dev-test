import { useState } from "react"

export const useScroll = (more) => {
  const [page, setPage] = useState(1)

  window.onscroll = () => {
    if (more && (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight)
    ) {
      setPage(page + 1)
    }
  };

  return page;
}