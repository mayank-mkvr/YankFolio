export { default as Navbar } from "./Navbar";
export { default as Welcome } from "./Welcome";

const App = () => {
    return(
        <main>
            <Navbar />
            <Welcome />
        </main>
    );
};
export { App };