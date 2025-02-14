import * as React from 'react'
import { Dialog, DialogContent } from './dialog'

interface IInfoDialog {
  readonly message: string
  readonly onDismissed: () => void
}

export class InfoDialog extends React.Component<IInfoDialog> {
  public render() {
     return (
       <Dialog
         id="info-dialog"
         title={'Information'}
         type="normal"
         onDismissed={this.props.onDismissed}
         >
         <DialogContent>{this.props.message}</DialogContent>
       </Dialog>
     )
   }
 }
 
