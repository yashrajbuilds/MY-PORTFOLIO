import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    let mouseX = 0
    let mouseY = 0
    let followerX = 0
    let followerY = 0
    let animFrame

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.left = mouseX + 'px'
      cursor.style.top = mouseY + 'px'
    }

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.12
      followerY += (mouseY - followerY) * 0.12
      follower.style.left = followerX + 'px'
      follower.style.top = followerY + 'px'
      animFrame = requestAnimationFrame(animateFollower)
    }

    const addHover = () => {
      cursor.classList.add('hover')
      follower.classList.add('hover')
    }
    const removeHover = () => {
      cursor.classList.remove('hover')
      follower.classList.remove('hover')
    }

    const bindHoverElements = () => {
      const hoverEls = document.querySelectorAll('a, button, [data-cursor-hover]')
      hoverEls.forEach(el => {
        el.addEventListener('mouseenter', addHover)
        el.addEventListener('mouseleave', removeHover)
      })
    }

    document.addEventListener('mousemove', onMouseMove)
    animFrame = requestAnimationFrame(animateFollower)
    bindHoverElements()

    const observer = new MutationObserver(bindHoverElements)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animFrame)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  )
}
