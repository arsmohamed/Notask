import React, {useState} from 'react';
import { DeleteFilled , DeleteOutlined, EditOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import FadeIn  from 'react-fade-in';
import NoteContainer from '../../../UI/Modal';
import TextArea from '../../../UI/TextArea';
import { MdCheckCircleOutline } from "react-icons/md";
const HoveringContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin-top: 6px;
    margin-right: 6px;
    font-size: 27px;
    color: #f5ba13;
`
const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`
const IcionStyleing = styled.div`
    position: relative;
    float: right;
    color: #f5ba13;
`
const borderStyling = {
    border: "1px solid rgb(245,186,19, 0.382)",
    boxShadow: "0 0 2px 2px rgb(245,186,19, 0.382)",
  } 

const Note = (props) => 
{   
    //this is for deleting the note 
    const handleDelete = () => {props.onDelete(props.id);}    
    //this is for the Hovering for the delete Icon
    const [isHover, SetHover] = useState(true);
    const OnHovering = () => {SetHover(!isHover)}

    /******************************************************* Title *************************************************************************/
    //this is for changing the title
    const [TitleClicked, ChangeTitleClicked] = useState(props.isTitleValue)
    let [RecievedTitle, ChangeRecievedTitle] = useState("")
    let RecievedTitleLittersNumber = ((props.NumberOfLitters >= 20) ?  2  : 1) 
    const [NumberOfTitleRows, ChangeNumberOfRows]= useState("")
    const TitleHandler = () =>{
        return(
            ChangeTitleClicked(false),
            ChangeRecievedTitle(props.title),
            ChangeNumberOfRows(RecievedTitleLittersNumber)
            ) 
        }
    const changeTItleHandler = () => {return(ChangeTitleClicked(true) , props.ChangeTitle(props.id, RecievedTitle), ChangeRecievedTitle(""))}
    const handlerChangeTitle = (event) => {
        const TargetLength = event.target.value.length
        const ReturnRowsValue = (TargetLength  >= 20 ) ?  2 : 1
        ChangeRecievedTitle(event.target.value)
        ChangeNumberOfRows(ReturnRowsValue)
    } 
    const handlingTitle =() => {
        if (TitleClicked) {
            return(
            <FadeIn>
                <Container>
                        <FadeIn>
                            <div style={{
                                width: "260px",
                                fontSize: "1.2em", 
                                wordWrap: "break-word",
                                padding: "5px",
                                borderRadius: "7px",
                                border:"solid",
                                borderWidth:"thin",
                                hover: borderStyling,
                                color: `${props.RecieveColor.TextAreaFC}`,
                                backgroundColor: `${props.RecieveColor.TextAreaBGC}`,
                                borderColor:  `${props.RecieveColor.BorderColor}`,
                            }}>
                                <FadeIn>{ props.title}</FadeIn>
                            </div>
                        </FadeIn>
                    <FadeIn><IcionStyleing><EditOutlined onClick={TitleHandler}/></IcionStyleing></FadeIn>
                </Container>
            </FadeIn>
            )
        }
        else
        {
            return(
            <FadeIn>
            <Container>
                <FadeIn>
                <TextArea 
                    rows={NumberOfTitleRows}
                    maxLength={"30"}
                    widthValue= {"260px"}
                    paddingVale= {"5px"}
                    outlineValue= "none"
                    fontSizeValue= {"1.2em"}
                    fontFamilyValue= {"inherit"} 
                    resizeValue= {"none"}
                    IsCalledValue={"HOVER"}
                    marginRightValue={"2px"}
                    borderRadiusValue= {"7px"}
                    InputValue = {RecievedTitle}
                    onchangeValue={handlerChangeTitle}                            
                    backGroundColorValue={props.RecieveColor.UserInputBGC}
                    FontColorValue={props.RecieveColor.UserInputFC}
                    PlaceHolderColorValue={props.RecieveColor.UserInputPHC}
                />
                </FadeIn>
                <FadeIn><IcionStyleing><MdCheckCircleOutline onClick={changeTItleHandler} /></IcionStyleing></FadeIn>
            </Container>
            </FadeIn>
            )
        }
    }
    /*************************************************** Content *****************************************************************************/
    //this is for changing the content
    const [ContentClicked, ChangeContentClicked] = useState(props.isContent)
    let [RecievedContent, ChangeRecievedContent] = useState("")
    const ContentHandler = () =>{return(ChangeContentClicked(false),ChangeRecievedContent(props.content)) }
    const changeContentHandler = () => {return(ChangeContentClicked(true) , props.ChangeContent(props.id, RecievedContent), ChangeRecievedContent(""))}
    const handlingContent =() => {
        if (ContentClicked) {
            return(
            <FadeIn>
            <Container>
                <FadeIn>
                    <div style={{
                        width: "260px",
                        height: "150px", 
                        fontSize: "1.2em", 
                        padding: "5px",
                        wordWrap: "break-word",
                        overflow: "auto",
                        border:"solid",
                        borderWidth:"thin",
                        hover: borderStyling,
                        borderRadius: "7px",
                        color: `${props.RecieveColor.TextAreaFC}`,
                        backgroundColor: `${props.RecieveColor.TextAreaBGC}`,
                        borderColor:  `${props.RecieveColor.BorderColor}`,
                    }}>
                        <FadeIn>{ props.content}</FadeIn>
                    </div>
                </FadeIn>
                <FadeIn><IcionStyleing><EditOutlined onClick={ContentHandler}/></IcionStyleing></FadeIn>
            </Container>
            </FadeIn>
            )
        }
        else
        {
            return(
            <FadeIn>
            <Container>
                <FadeIn>
                <TextArea 
                    rows={6}
                    widthValue= {"260px"}
                    borderRadiusValue= {"7px"}
                    paddingVale= {"5px"}
                    outlineValue= "none"
                    fontSizeValue= {"1.2em"}
                    fontFamilyValue= {"inherit"}
                    resizeValue= {"vertical"}
                    IsCalledValue={"FOCUS"}
                    BorderValue={"solid"}
                    borderWidthValue="thin"
                    marginRightValue={"2px"}
                    InputValue = {RecievedContent} 
                    onchangeValue={e => ChangeRecievedContent(e.target.value)}  
                    backGroundColorValue={props.RecieveColor.TextAreaBGC}
                    FontColorValue={props.RecieveColor.TextAreaFC}
                    PlaceHolderColorValue={props.RecieveColor.TextAreaPHC}
                    borderColorValue={props.RecieveColor.BorderColor}
                />
                </FadeIn>
                <FadeIn><IcionStyleing><MdCheckCircleOutline onClick={changeContentHandler} /></IcionStyleing></FadeIn>
            </Container>
            </FadeIn>
            )
        }
    }      
    
    /*************************************************** Note *****************************************************************************/
    const NoteValue = <FadeIn>
            <NoteContainer
                background= {"#fff"}
                borderRadiusValue= {"20px"}
                boxShadowValue= {"0 2px 5px #ccc"}
                flexDirectionValue= {"column"}
                padding= {"10px"}
                width= {"300px"}
                heightValue={"200px"}
                margin= {"16px"}
                float= {"left"}
                display= {"flex"}
                backGroundColorValue={props.RecieveColor.NotekBGC}
                FontColorValue={props.RecieveColor.NoteFC}
                >
                <FadeIn>{handlingTitle()}</FadeIn>
                <FadeIn>{handlingContent()}</FadeIn>
                <HoveringContainer > 
                    {isHover ? 
                    <FadeIn><DeleteFilled onPointerEnter={OnHovering} /></FadeIn>: 
                    <FadeIn><DeleteOutlined onClick={handleDelete} onMouseLeave={OnHovering}/></FadeIn>}
                </HoveringContainer>
            </NoteContainer>
        </FadeIn>

   return(NoteValue)

}
export default Note 