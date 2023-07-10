const SectionBox = ({needBg, children}) => {
    return (
        <section className={`w-full flex-center flex-col space-y-8 py-20 ${needBg ? 'bg-[#F7F7F7]' : ''}`}>
            {children}
        </section>
    );
}


export default SectionBox