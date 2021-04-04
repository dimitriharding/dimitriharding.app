interface SlackOptions {
  message?: string
  channel?: string
}

export const slack = (options: SlackOptions) => {
  console.log('this is my slack')
}
