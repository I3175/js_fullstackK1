// Làm bài tập Tab
// Bước 1: tìm giao diện html css tab
import TabHeader from "./component/tabHeader.js";
import TabContent from "./component/tabContent.js";

function Tabs() {

    const TabsMenu = [
        'Home',
        'Profile',
        'Contact'
    ];
    const contentTab = [
        'Home Content',
        'Profile Content',
        'Contact Content'
    ];
    const [selectIndex, setSelectIndex] = React.useState(0);

    // check class active
    function setActive(indexCheck) {
        let classList = 'nav-link ';
        if (+selectIndex === indexCheck) {
            classList = classList + 'active'
        }
        return classList;
    }


    // function khai bào
    function handleTabSelect(index) {

        return function () {
            setSelectIndex(index);
        }

    }

    return (

        <React.Fragment>
            <div className="container">
                {/* Phần tabs header */}
                {/* chúng ta đang gọi hàm để render ra giao diện tabHeader */}

                <TabHeader
                    TabsMenu={TabsMenu}
                    setActive={setActive}
                    handleTabSelect={handleTabSelect}
                />

                {/* Phần tabs header */}
                <TabContent
                    contentTab={contentTab}
                    selectIndex={selectIndex}
                />
            </div>

        </React.Fragment>

    );
}

// component tabs header 

// conponent tabs content


const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<Tabs />);