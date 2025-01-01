import PropTypes from 'prop-types';

/**
 * ItemFeature Component 
 * Displays additional details about the item, such as era, style, or a one of kind message 
 */
const ItemFeature = ({ era, isUnique }) => {
    return (
        <div className="item-feature">
            <span className="era">
                <strong>Era:</strong>{era}
            </span>
            {isUnique && (
                <span className="unique">
                    <strong>Note:</strong>This is one of kind item!
                </span>
            )}
        </div>
    );
};

//Define PropTypes for validation
ItemFeature.propTypes = {
    era: PropTypes.string.isRequired, // The item's era (e.g., "Y2k")\
    isUnique: PropTypes.bool.isRequired,
};

export default ItemFeature;