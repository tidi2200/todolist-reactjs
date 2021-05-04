import React from 'react';
import Button from '@atlaskit/button';
import styled, {css} from 'styled-components';
import CheckIcon from '@atlaskit/icon/glyph/check';
import UnCheckIcon from '@atlaskit/icon/glyph/editor/close';

const ButtonStyled = styled(Button)`
    margin-top:5px;
    text-align:left;

    &, &:hover{
        ${p => p.isCompleted && css`
            text-decoration: line-through;
        `}
    }
    
    &:hover{
        .check-icon{
            display: inline-block;
        }
    }

    .check-icon{
        display:none;

        &:hover{
            background-color:grey;
            border-radius:3px;
        }
    }
`;

export default function Todo({todo, onCheckBtnClick}){
    return(
        <ButtonStyled
            isCompleted={todo.isCompleted} 
            shouldFitContainer 
            iconAfter={
                <>
                <span className="check-icon" onClick={() => onCheckBtnClick(todo.id)}>
                    <CheckIcon primaryColor="#4fff4f"/>
                </span>
                <span className="check-icon" >
                    <UnCheckIcon primaryColor="#4fff4f"/>
                </span>
                </>
                
            }
        >
            {todo.name}
        </ButtonStyled>
    )
}