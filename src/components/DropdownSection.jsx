import InfoDropdown from "./InfoDropdown";

const DropdownSection = ({ dropdowns }) => {

    return (
        <div className="product-dropdowns-container">
            {
                dropdowns.map((dropdown, index) => (
                    <div className="dropdown-main-container" key={index}>
                        <InfoDropdown title={dropdown.title} content={dropdown.content} />
                    </div>
                ))
            }
        </div>
    );
}

export default DropdownSection;