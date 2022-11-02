// Inline Style

// 1. Create a style object for the main JSX
const main = (
  <main style={{ backgroundColor: "#F3F0F5" }}>
    <p>This is a the main object!</p>
  </main>
);

// 2. Create a style object for the footer and app JSX
const footer = (
  <footer style={{ backgroundColor: "red" }}>
    <p>This is a the main object!</p>
  </footer>
);

const app = <div style={{ backgroundColor: "orange" }}>{footer}</div>;

// 3. Add more styles to the JSX elements
<header
  style={{ border: "2px solid orange", color: "black", fontSize: "18px" }}
>
  <h1>I am a header.</h1>
</header>;
