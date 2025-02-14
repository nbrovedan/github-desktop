import * as React from 'react'
import { Dialog, DialogContent } from './dialog'
import { Octicon } from './octicons'
import * as octicons from './octicons/octicons.generated'

interface IMergeToolDialog {
  readonly message: string
  readonly onDismissed: () => void
}

export class MergeToolDialog extends React.Component<IMergeToolDialog> {
  public render() {
     return (
       <Dialog
         id="info-dialog"
         title={'Information'}
         type="normal"
         loading={true}
         onDismissed={this.props.onDismissed}
         >
         
         <DialogContent className='dialogContent'>
            <Octicon height={24} symbol={octicons.info} />
            {this.props.message}
        </DialogContent>
       </Dialog>
     )
   }
 }
 
