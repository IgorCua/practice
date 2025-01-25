import { Outlet } from "react-router";
import { Navigation } from "../../components/navigation/Navigation";
import { Section } from "../../components/section/Section";

export const Header = () => {
    return (
        <Section>
            <header className="header">
                <Navigation />
            </header>
            
            <Outlet/>
        </Section>
    );
};
