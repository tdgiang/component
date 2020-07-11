import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { colors, sizes, fonts } from "../constants/theme";

class Button extends Component {
  render() {
    const {
      style,
      opacity,
      color,
      locations,
      shadow,
      children,
      ...props
    } = this.props;

    const buttonStyles = [
      styles.button,
      shadow && styles.shadow,
      color && styles[color], // predefined styles colors for backgroundColor
      color && !styles[color] && { backgroundColor: color }, // custom backgroundColor
      style
    ];

    

    return (
      <TouchableOpacity
        style={buttonStyles}
        activeOpacity={opacity || 0.8}
        {...props}
      >
        {children}
      </TouchableOpacity>
    );
  }
}

Button.defaultProps = {
  opacity: 0.8,
  color: colors.white
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: sizes.radius,
    height: sizes.base * 3,
    justifyContent: "center",
    marginVertical:sizes.padding / 3
  },
  shadow: {
    shadowColor:  colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  accent: { backgroundColor: colors.accent },
  primary: { backgroundColor: colors.primary },
  secondary: { backgroundColor: colors.secondary },
  tertiary: { backgroundColor: colors.tertiary },
  black: { backgroundColor: colors.black },
  white: { backgroundColor: colors.white },
  gray: { backgroundColor: colors.gray },
  gray2: { backgroundColor: colors.gray2 },
  gray3: { backgroundColor: colors.gray3 },
  gray4: { backgroundColor: colors.gray4 },
  orange: { backgroundColor: colors.orange },
  lightBlue: { backgroundColor: colors.lightBlue }
});
