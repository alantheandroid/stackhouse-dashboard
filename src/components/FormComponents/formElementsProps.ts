import { OptionsType } from "../FormFactory/formModel"

export type FormElementProps = {
    label: string
    disabled?: boolean
    required?: boolean
    isDisabled?: boolean
    inputType?: string
    elementId: string
    name?: string
    options?: OptionsType[]
  }