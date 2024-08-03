function TabHeader(props) {

    const {TabsMenu, handleTabSelect, setActive} = props;

    return (
        <nav>
            <div className="nav nav-tabs">
                {
                    TabsMenu.map(
                        function (item, index) {
                            return (
                                <button
                                    key={index}
                                    data-index={index}
                                    onClick={handleTabSelect(index)}
                                    className={setActive(index)} >
                                    {item}
                                </button>
                            )
                        }
                    )
                }
            </div>
        </nav>
    );
}

export default TabHeader;