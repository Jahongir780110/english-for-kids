export function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");

  sidebar.classList.toggle("hidden");
  sidebar.querySelector(".backdrop").classList.toggle("hidden");
}
