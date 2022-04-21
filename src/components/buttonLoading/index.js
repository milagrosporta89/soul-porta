import { Button, CircularProgress, Grid } from "@material-ui/core";
import "./styles.scss";

const ButtonLoading = (props) => {
  const { isLoading, sizeLoading, onClick, children, disabled } = props;
  return (
    <button className="buttonLoading" type="submit"

      disabled={disabled ? disabled : false}
      onClick={!isLoading ? onClick : null}
      {...props}
    >
      {isLoading ? (
      
          <CircularProgress
            size={sizeLoading ? sizeLoading : "1.5rem"}
            style={{ color: "white" }}
          />
     
      ) : (
        children
      )}
    </button>
  );
};

export default ButtonLoading