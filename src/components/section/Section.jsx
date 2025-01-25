import css from './style.module.scss';

export const Section = ({children}) => {
    return <section className={css.section}>
        {children}
    </section>
}