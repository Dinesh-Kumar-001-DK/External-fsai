import React from "react";
function Hello() {
return <h2>Hello Component</h2>;
}
function Welcome() {
return <h2>Welcome Component</h2>;
}
function App() {
return (
<div>
<Hello />
<Welcome />
</div>
);
}
export default App;