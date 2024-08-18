import React,{Component} from "react";
import { createPortal } from "react-dom";//which handles dom elements in react


class Dialog extends Component<{},{}>{

    element=document.createElement("div");

componentDidMount(): void {
    document.getElementById("root-2")?.appendChild(this.element);

} 
   componentWillUnmount(): void {
    document.getElementById("root-2")?.removeChild(this.element);
   }

    render(){

            const element=(
            <div className="modal-box">
                <h2>Title of the dialog</h2>
                <h2>Content of the dialog</h2>
            </div>
            );
            return createPortal(element,this.element);
    }

}
export default Dialog;