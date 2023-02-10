import React from "react";
import ButtonAntd from "antd/lib/button";
import { defaultTo } from "lodash";
import styled, { css } from "styled-components";

const buttonsTypes = {
    primary: {
        background: ({ theme }) => theme.colors.primary,
        color: ({ theme }) => theme.colors.font1,
        borderColor: "transparent",
    },
    secondary: {
        background: ({ theme }) => theme.colors.secondary,
        color: ({ theme }) => theme.colors.font1,
        borderColor: "transparent",
    },
    tertiary: {
        background: "transparent",
        color: ({ theme }) => theme.colors.primary,
        borderColor: ({ theme }) => theme.colors.primary,
    },
};

export const ButtonPopUp = ({
                           icon,
                           type = "primary",
                           htmlType = "text",
                           width = "auto",
                           height = "auto",
                           wordBreak = "keep-all",
                           borderRadius = "0.3em",
                           margin = ".7em auto",
                           padding = ".8em 2em",
                           fontSize = "1rem",
                           fontWeight = "600",
                           position = "initial",
                           opacity = "0.8",
                           block = false,
                           textTransform = "none",

                           loading,
                           disabled = false,
                           children,
                           onClick,
                       }) => {
    const buttonStyle = buttonsTypes[type];

    return (
        <ItemButtonAntd
            loading={loading}
            disabled={disabled}
            onClick={onClick}
            htmlType={htmlType}
            block={block}
            width={width}
            height={height}
            wordBreak={wordBreak}
            background={buttonStyle.background}
            color={buttonStyle.color}
            borderColor={buttonStyle.borderColor}
            borderRadius={borderRadius}
            margin={margin}
            padding={padding}
            fontSize={fontSize}
            fontWeight={fontWeight}
            position={position}
            opacity={opacity}
            icon={icon}
            textTransform={textTransform}
        >
            {children}
        </ItemButtonAntd>
    );
};

const ItemButtonAntd = styled(ButtonAntd)`
  width: ${({ width, block }) => (block ? "100%" : width)};
  height: ${({ height }) => height};
  word-break: ${({ wordBreak }) => wordBreak};
  text-transform: ${({ textTransform }) => textTransform};
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ borderColor, background }) =>
    background !== "transparent" ? background : borderColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  position: ${({ position }) => position};
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  outline: none !important;
  overflow: hidden;
  text-overflow: ellipsis;
  appearance: none;
  white-space: nowrap;
  font-family: inherit;
  box-sizing: border-box;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus,
  &:active {
    border: ${({ border, background }) =>
    background !== "transparent" ? `1px solid ${background}` : border};
    border-color: ${({ borderColor, background }) =>
    background !== "transparent" ? background : borderColor};
    opacity: ${({ opacity, bgEvent }) => (bgEvent ? "1" : opacity)};
    color: ${({ color = "" }) => color};
    background: ${({ bgEvent, background }) =>
    defaultTo(bgEvent, defaultTo(background, ""))};
  }

  &[disabled] {
    cursor: not-allowed;
    pointer-events: none;
    border-color: rgb(71 77 87 / 50%);
    color: rgb(255 255 255 / 79%);
    background: rgb(71 77 87 / 43%);
    opacity: 0.9;
    outline: none;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      pointer-events: none;
      border-color: rgb(71 77 87 / 50%);
      color: rgb(255 255 255 / 79%);
      background: rgb(71 77 87 / 43%);
      opacity: 0.9;
      outline: none;
    `}
`;
