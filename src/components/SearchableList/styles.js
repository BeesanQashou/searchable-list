import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
    root: {
     padding: 10, 
     minWidth: 100,
     minHeight: 300
    },
    item: {
        margin: '5px 0px',
        cursor: 'pointer',
        '&:hover': {
            color: '#5cbfd3'
        }
    },
    selectedItem: {
        color: '#ccc',
        '&:hover': {
            color: '#ccc'
        }
    }
  }));

  export default useStyles;