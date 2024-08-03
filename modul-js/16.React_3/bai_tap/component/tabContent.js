function TabContent(props) {
    const {contentTab, selectIndex}  = props;
    return (
        
        <div className="tab-content">
        {
            contentTab.map(
                function (item, index) {
                    return (
                        <div
                            key={index}
                            className={index === +selectIndex ? 'tab-pane fade show active' : 'tab-pane fade'}>
                            {item}</div>
                    )
                }
            )
        }
        </div>
    );
}
export default TabContent;