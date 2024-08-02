/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-bg-hero-image': 'url("https://c.wallhere.com/photos/b4/c1/Dragon_Ball_Dragon_Ball_Z_dragon_minimalism-2307704.jpg!s1")',
        
        'bg-sayayin-image': 'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7369ba09-6adc-439b-bfa5-fa9296ad4ac0/dahl0v0-214dce8f-358a-4cc6-b817-3caa6af40127.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzczNjliYTA5LTZhZGMtNDM5Yi1iZmE1LWZhOTI5NmFkNGFjMFwvZGFobDB2MC0yMTRkY2U4Zi0zNThhLTRjYzYtYjgxNy0zY2FhNmFmNDAxMjcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3msMVxFpG8qawUzq9mc1MGlNSZ6Uoeb61wUL-FlDRIs")',

        'bg-goku-404': 'url("./src/public/goku404.png")',
      },
      
    },
  },
  plugins: [],
}


