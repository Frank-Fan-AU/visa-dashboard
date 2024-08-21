"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";


import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { formSchema } from "@/lib/schema";
import { z } from "zod";




export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      submitTime: "",
      endTime: "",
      ifIncludedCouple:"",
      ifTogether:"",
      major:"",
      majorType:"",
      educationLevel:"",
      educationType:"",
      submitPlace:"",
      ifDIY:"",
      infoFrom:"",
    },
  });

  // 2. Define a submit handler.
  async function  onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
   const response =  await fetch("/api/visaTable", {
      method: "POST",
      body:JSON.stringify(values),
      headers:{
        "Content-Type":"application/json"
      }
    })
    console.log('response',response)
    if(!response.ok){
      alert('Submit failed')
      return
    }else{
      alert('Submit success')
    }
    form.reset()
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-row space-x-12">

          <div className="space-y-3 w-3/4 ml-10">

          <FormField
          control={form.control}
          name="submitTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>递签时间</FormLabel>
              <FormControl>
                <Input placeholder="yyyy-mm-dd" {...field} />
              </FormControl>
              <FormDescription>如果要是还没递签可以空着，填日期按2024-08-28这样的格式填</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="endTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>下签时间</FormLabel>
              <FormControl>
                <Input placeholder="yyyy-mm-dd" {...field} />
              </FormControl>
              <FormDescription>如果要是还没下签可以空着，填日期按2024-08-28这样的格式填</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="major"
          render={({ field }) => (
            <FormItem>
              <FormLabel>主申专业</FormLabel>
              <FormControl>
                <Input placeholder="可以的话最好填中文的" {...field} />
              </FormControl>
              <FormDescription>大概专业，比如具体到食品、计算机这种就行</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="infoFrom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>信息来源</FormLabel>
              <FormControl>
                <Input placeholder="这条信息是从哪里获取的" {...field} />
              </FormControl>
              <FormDescription>小红书？微信群？自己</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
          </div>

          <div className="space-y-5 w-3/4 ml-10">
          <FormField
          control={form.control}
          name="ifIncludedCouple"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>是否含陪读？</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row space-x-3">
                  <FormItem className="flex items-center space-x-1 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="true" />
                    </FormControl>
                    <FormLabel className="font-normal">是</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-1 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="false" />
                    </FormControl>
                    <FormLabel className="font-normal">否</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="ifTogether"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>分开递/一起递</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row space-x-3">
                  <FormItem className="flex items-center space-x-1 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="分开递" />
                    </FormControl>
                    <FormLabel className="font-normal">分开递</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-1 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="一起递" />
                    </FormControl>
                    <FormLabel className="font-normal">一起递</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="educationLevel"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>本/硕/博</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row space-x-3">
                  <FormItem className="flex items-center space-x-1 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="本科" />
                    </FormControl>
                    <FormLabel className="font-normal">本科</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-1 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="硕士" />
                    </FormControl>
                    <FormLabel className="font-normal">硕士</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-1 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="博士" />
                    </FormControl>
                    <FormLabel className="font-normal">博士</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="educationType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>学校类别：八大/其他</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row space-x-3">
                  <FormItem className="flex items-center space-x-1 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="八大" />
                    </FormControl>
                    <FormLabel className="font-normal">八大</FormLabel>
                  </FormItem>
                  
                  <FormItem className="flex items-center space-x-1 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="其他" />
                    </FormControl>
                    <FormLabel className="font-normal">其他</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="majorType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>专业类别：三宝/其他</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row space-x-3">
                  
                  <FormItem className="flex items-center space-x-1 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="三宝" />
                    </FormControl>
                    <FormLabel className="font-normal">三宝</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-1 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="其他" />
                    </FormControl>
                    <FormLabel className="font-normal">其他</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="submitPlace"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>境内境外递交</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row space-x-3">
                  <FormItem className="flex items-center space-x-1 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="境内递交" />
                    </FormControl>
                    <FormLabel className="font-normal">境内递交</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-1 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="境外递交" />
                    </FormControl>
                    <FormLabel className="font-normal">境外递交</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ifDIY"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>DIY/找中介</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row space-x-3">
                  <FormItem className="flex items-center space-x-1 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="DIY" />
                    </FormControl>
                    <FormLabel className="font-normal">DIY</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-1 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="找中介" />
                    </FormControl>
                    <FormLabel className="font-normal">找中介</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
          </div>
        
       

      
        
      
        
      </form>
    </Form>
  );
}
