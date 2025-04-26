function initCursor() {
  // 清除旧光标
  const oldCursor = document.querySelector(".cursor-gif");
  if (oldCursor) oldCursor.remove();

  // 创建新光标
  const cursor = document.createElement("img");
  cursor.src = "/images/cursor/normal.gif";
  cursor.className = "cursor-gif";
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px"; // 用 clientX
    cursor.style.top = e.clientY + "px";   // 用 clientY
  });

  const updateCursor = (src) => cursor.src = src;

  const applyHoverEffects = () => {
    document.querySelectorAll("input, textarea").forEach(el => {
      el.addEventListener("mouseenter", () => updateCursor("/images/cursor/text.gif"));
      el.addEventListener("mouseleave", () => updateCursor("/images/cursor/normal.gif"));
    });

    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", () => updateCursor("/images/cursor/link.gif"));
      el.addEventListener("mouseleave", () => updateCursor("/images/cursor/normal.gif"));
    });
  };

  applyHoverEffects();

  const observer = new MutationObserver(() => {
    applyHoverEffects();
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

document.addEventListener("DOMContentLoaded", initCursor);
