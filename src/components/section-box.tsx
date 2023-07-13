const SectionBox = ({needBg, children}) => {
    return (
        <section className={`py-16 ${needBg ? 'bg-[#F5F5F5]' : ''}`}>
            {children}
        </section>
    );
}


export default SectionBox