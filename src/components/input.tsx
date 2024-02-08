import { TextInput, TextInputProps } from "react-native";
import colors from "tailwindcss/colors";

export function Input({...rest}: TextInputProps) {
  return (
    <TextInput
      multiline
      textAlignVertical="top"
      placeholderTextColor={colors.zinc[400]}
      className="h-24 rounded-md bg-slate-900 px-4 font-body text-sm text-zinc-100"
      {...rest}
    />
  )
}