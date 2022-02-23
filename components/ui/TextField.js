import React from "react";
import styled from "@emotion/styled";

function TextField({className, as="input", type="text", ...props}){
	return (
		<div className={className}>
			{as === "input"?
				<input type={type} placeholder="example" {...props}/> :
				<textarea rows="9" placeholder="example" {...props}/>
			}
		</div>
	)
}

export default styled(TextField)`
	input {
		width: 100%;
		padding: 14px 10px;
		background-color: unset;
		border: 1px solid #efefef;
		color: #efefef;
		
		&:focus {
			outline: 3px solid #ffa300;
		}
		
		&::placeholder {
			color: #efefef;
		}
	}
	
	textarea {
		width: 100%;
		padding: 14px 10px;
		background-color: unset;
		border: 1px solid #efefef;
		color: #efefef;
		&:focus {
			outline: 3px solid #ffa300;
		}
		
		&::placeholder {
			color: #efefef;
		}
	}
`;