
import PropTypes from "prop-types";
import styles from "./CustomCard.module.css";


const CustomCard = ({children}) => {
    return (
        <div className={styles.card}>
            {children}
        </div>
    );
};

CustomCard.propTypes = {
    children: PropTypes.node.isRequired,
};


export default CustomCard;