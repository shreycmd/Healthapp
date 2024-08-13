import React from 'react'
import { Control } from 'react-hook-form'
import {
   
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import { FormFieldtypes } from './forms/Applicationform'

  interface customprops{
 fcontrol:Control<any>
 fieldtype:FormFieldtypes
  }
const Customformfield = ({fcontrol,fieldtype}:customprops) => {
  return (
    <FormField
          control={fcontrol}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
  )
}

export default Customformfield