import { Outlet } from "react-router";
import { Navigation } from "../../components/navigation/Navigation";
// import { Section } from "../../components/section/Section";

export const Header = () => {
    return (
        // <Section>
        <div>
            <header className="header">
                <Navigation />
            </header>
            
            <Outlet/>
        </div>
        // </Section>
    );
};
