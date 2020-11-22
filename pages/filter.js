import React from "react";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

const Filter = (props) => {
  const { item } = props;

  return (
    <Box>
      <label className="ml-2">{item.key}</label>
      <label className="text-sm text-gray-400 ml-4">
        {item.doc_count.toLocaleString()}
      </label>
    </Box>
  );
};

Filter.propTypes = {
  item: PropTypes.any,
};

export default Filter;
