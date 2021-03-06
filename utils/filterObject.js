const filterObject = (object, ...props) => {
  if (props.length === 0) return {};
  const filteredObj = {};
  props.forEach(prop => {
    filteredObj[prop] = object[prop];
  });
  return filteredObj;
};

module.exports = filterObject;
