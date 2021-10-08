import React, { useState } from 'react';
import styled from 'styled-components';
import { PlusCircleFilled, CheckCircleFilled} from '@ant-design/icons'
import FadeIn from 'react-fade-in';
import TextArea from '../../../UI/TextArea';
import NoteContainer from '../../../UI/Modal';
import { MdSentimentVeryDissatisfied, MdTitle, MdImportContacts ,MdSentimentVerySatisfied } from "react-icons/md";
import API from "../../../API/API";

const AddNote = styled.div`
    font-size :30px;
    color: #f5ba13;
    position: absolute;
    right: 0px;
    bottom: -15px;
    width: 36px;
    height: 36px;
`
const InfoContainer = styled.div`
    width: 455px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 4px;
    `
const CreateNote = (props) => {
    const IconColor = { color : props.RecieveColor.IconC }
    const [isExpanded, setExpanded] = useState(false);
    const [isSubmit, setSubmit] = useState(false); 
    const [CurrentNote, setNote] = useState({title: "",content: "", id: ""}); 
    const [CurrentPlaceHolde, setPlaceHolder]= useState({titlePH: "Title" , contentPH: "Take a note ..."})
    const [isHover, SetHover] = useState(true);
    const [TargetLength, ChangeTargetLength] = useState("")
    const OnHoveringEnter = () => {SetHover(false)}
    const OnHoveringLeave = () => {SetHover(true)}
    const subNote = async (event) =>  {
        event.preventDefault();
        setSubmit(true);
        if (CurrentNote.title === "" && CurrentNote.content === "" )
        {   
        return( <FadeIn>{
            setPlaceHolder({ titlePH: "Please Enter A Title ....(-_-)!", contentPH: "Please Enter some Content ...(-_-)!"}) 
            && isIconUserInput() && isIconTextArea()}
        </FadeIn> )
        } 
        else  if (CurrentNote.title === "" )
        {  
        return( <FadeIn>{
            setPlaceHolder({titlePH: "Please Enter A Title ....(-_-)"}) 
            && isIconUserInput()}
        </FadeIn>)
                
        } else if (CurrentNote.content === "" )
        {
        return( <FadeIn>{
            setPlaceHolder({contentPH: "Please Enter some Content ...(-_-)!"}) 
            && isIconTextArea()}
        </FadeIn>)
        }else
        {
            if(props.isLoggedIn){
                return API.CreateNote(CurrentNote.title, CurrentNote.content, (note)=>{
                    setNote({note})
                    props.AddedNote(note)
                    setNote({
                        title: "",
                        content: "",
                        id: ""
                    })
                    setPlaceHolder({
                        titlePH: "Title" , 
                        contentPH: "Take a note ..."
                    })
                    props.TitleLitterNumber(TargetLength)
                    ChangeTargetLength("")
                    setSubmit(false)
                } ) 
            }
            props.AddedNote(CurrentNote)
            setNote({
                title: "",
                content: "",
                id: ""
            })
            setPlaceHolder({
                titlePH: "Title" , 
                contentPH: "Take a note ..."
            })
            props.TitleLitterNumber(TargetLength)
            ChangeTargetLength("")
            setSubmit(false)
        }  
        
    }
    const isIconUserInput = () => 
    (!isSubmit ? 
        (CurrentNote.title === "" ? <MdSentimentVerySatisfied style={IconColor}/> : <MdTitle style={IconColor}/>) 
        : (CurrentNote.title === "" ? <MdSentimentVeryDissatisfied style={IconColor}/> : <MdTitle style={IconColor}/>))
    const isIconTextArea = () => 
    (!isSubmit ? 
        (CurrentNote.content === "" ? <MdSentimentVerySatisfied style={IconColor}/> : <MdImportContacts style={IconColor}/>) 
        : (CurrentNote.content === "" ? <MdSentimentVeryDissatisfied style={IconColor}/> : <MdImportContacts style={IconColor}/>))
    
    const expand = () => {setExpanded(true)}

    /******************************************************* Title *************************************************************************/
    const handlerChangeTitle = (event) => {
        ChangeTargetLength(event.target.value.length)
        const {name , value} = event.target ;
        setNote(prevNote => { return {...prevNote, [name]: value};});
    }
    const TitleValue = <InfoContainer>
            <FadeIn><TextArea
                rows={(TargetLength >= 40 ) ? 2 : 1}
                maxLength={"30"}
                name="title"
                inputType={"text"}
                widthValue={"421px"}
                paddingVale={"4px"}
                outlineValue={"none"}
                marginBottomValue={"5px"}
                fontSizeValue={"1.2em"}
                fontFamilyValue={"inherit"}
                IsCalledValue={"FOCUS"} 
                borderRadiusValue= {"7px"}
                BorderValue={"solid"}
                borderWidthValue="thin"
                marginRightValue={"10px"}
                onClickValue={expand}
                onchangeValue={handlerChangeTitle}
                InputValue={CurrentNote.title}
                PlaceholderValue={CurrentPlaceHolde.titlePH}
                backGroundColorValue={props.RecieveColor.UserInputBGC}
                FontColorValue={props.RecieveColor.UserInputFC}
                PlaceHolderColorValue={props.RecieveColor.UserInputPHC}
                borderColorValue={props.RecieveColor.BorderColor}
            /></FadeIn>
            <FadeIn>{ isIconUserInput()}</FadeIn>
        </InfoContainer>
    
    /*************************************************** Content *****************************************************************************/
    const handlerChangeContent = (event) => {
        const {name , value} = event.target ;
        setNote(prevNote => { return {...prevNote, [name]: value};});
    }
    const ContentValue = isExpanded && 
        <InfoContainer>
            <FadeIn><TextArea
                InputValue={CurrentNote.content}
                name="content"
                PlaceholderValue={CurrentPlaceHolde.contentPH}
                rows={isExpanded ? 3 : 1}
                onchangeValue={handlerChangeContent}
                widthValue={"421px"}
                paddingVale={"4px"}
                outlineValue={"none"}
                fontSizeValue={"1.2em"}
                fontFamilyValue={"inherit"}
                resizeValue={"vertical"}
                IsCalledValue={"FOCUS"}
                borderRadiusValue= {"7px"}
                backGroundColorValue={props.RecieveColor.TextAreaBGC}
                FontColorValue={props.RecieveColor.TextAreaFC}
                PlaceHolderColorValue={props.RecieveColor.TextAreaPHC}
                borderColorValue={props.RecieveColor.BorderColor}
                BorderValue={"solid"}
                borderWidthValue="thin"
                marginRightValue={"10px"}
            /> </FadeIn>
            <FadeIn>{isIconTextArea()}</FadeIn>
        </InfoContainer>

    /*************************************************** Button *****************************************************************************/
    const ButtonValue = isExpanded && (
      <AddNote>
        <FadeIn>
          {isHover ? (
            <PlusCircleFilled onPointerEnter={OnHoveringEnter} />
          ) : (
            <CheckCircleFilled
              onClick={subNote}
              onMouseLeave={OnHoveringLeave}
            />
          )}
        </FadeIn>
      </AddNote>
    );
    
    /*************************************************** Create Note *****************************************************************************/
    const CreateTheNote = <FadeIn>
            <NoteContainer
                position= {"relative"}
                width= {"480px"}
                margin= {"30px auto 20px auto"}
                padding= {"15px"}
                boxShadowValue= {"0 1px 5px rgb(138, 137, 137)"}
                borderRadiusValue= {"24px"}
                resizeValue={"both"}
                backGroundColorValue={props.RecieveColor.NotekBGC}
                >
                {TitleValue}
                {ContentValue}
                {ButtonValue}
            </NoteContainer>
        </FadeIn>

    return(CreateTheNote)
}

export default CreateNote;
