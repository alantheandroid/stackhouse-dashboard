export type CompoundMsgType = {
    formId: string
    message: string
    items: unknown[]
    id: string
}

export type CompoundMsgState = {
    compoundMsgs: CompoundMsgType[]
}