"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { formSchema } from "@/lib/schema";
import { z } from "zod";

import { message } from "antd";
import React from "react";

const defaultValues = {
  ifSubmit: "",
  submitTime: "",
  submitPlace: "国内递交",
  ifGetVisa: "false",
  getVisaTime: "",
  visaOfficer: "",
  ifIncludedCouple: "单独学签",
  ifTogether: "",
  major: "",
  majorType: "",
  educationLevel: "本科",
  schoolType: "",
  ifDIY: "",
  isUser: "",
  infoFrom: "",
  otherInfo: "",
};
type ProfileFormProps = {
  userEmail: string | null | undefined;
};
export const ProfileForm: React.FC<ProfileFormProps> = ({ userEmail }) => {
  const [messageApi, contextHolder] = message.useMessage();
  
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const {reset} = form

  useEffect(() => {
    const fetchData = async ()=>{
      if (userEmail) {  
        let res  = await fetch(`/api/upload/${userEmail}`);
          let json =await res.json()
          if(json.exists){
            reset(json.data)
          }
       }
    }
    fetchData()
  }, [userEmail]);

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    if (userEmail) {
      values.userEmail = userEmail; // userEmail 不为 null 时才赋值
    }
    // ✅ This will be type-safe and validated.
    const response = await fetch("/api/upload", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      messageApi.open({
        type: "error",
        content: "Something error,please wait us fix",
      });
      return;
    } else {
      messageApi.open({
        type: "success",
        content: "Upload Access",
      });
    }
  }

  //Define a watch
  const ifSubmit = form.watch("ifSubmit");
  const ifGetVisa = form.watch("ifGetVisa");
  const ifIncludedCouple = form.watch("ifIncludedCouple");
  return (
    <>
      {contextHolder}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col lg:flex-row lg:ml-8">
          <div className="lg:min-w-[500px] lg:border-r-2 lg:border-gray-300">
            <div className="text-2xl font-bold mb-4">General</div>
            <FormField
              control={form.control}
              name="submitTime"
              render={({ field }) => (
                <FormItem className="mt-4  flex flex-col">
                  <FormLabel>递签日期*</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}>
                          {field.value ? (
                            format(new Date(field.value), "yyyy-MM-dd")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={
                          field.value ? new Date(field.value) : undefined
                        }
                        onSelect={(date) => {
                          if (date) {
                            field.onChange(format(date, "yyyy-MM-dd")); // 将 Date 对象转换为字符串并存储
                          }
                        }}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="submitPlace"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>境内境外递交*</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex flex-row space-x-3">
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="国内递交" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          国内递交
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="海外递交" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          海外递交
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="澳洲境内递交" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          澳洲境内递交
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ifIncludedCouple"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>是否陪读*</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex flex-row space-x-3">
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="单独学签" />
                        </FormControl>
                        <FormLabel className="font-normal">单独学签</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="含陪读一起递" />
                        </FormControl>
                        <FormLabel className="font-normal">含陪读一起递</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="陪读单独递" />
                        </FormControl>
                        <FormLabel className="font-normal">陪读单独递</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="major"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>主申专业*</FormLabel>
                  <FormControl>
                    <Input className="lg:w-1/2" placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="educationLevel"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>本/硕/博*</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex flex-row space-x-3 w-full">
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
                          <RadioGroupItem value="MPhil" />
                        </FormControl>
                        <FormLabel className="font-normal">MPhil</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="博士" />
                        </FormControl>
                        <FormLabel className="font-normal">博士</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Non-Award" />
                        </FormControl>
                        <FormLabel className="font-normal">Non-Award</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ifGetVisa"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>是否已获得签证*</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
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
            {ifGetVisa === "true" && (
              <>
                <FormField
                  control={form.control}
                  name="getVisaTime"
                  render={({ field }) => (
                    <FormItem className="mt-4 flex flex-col">
                      <FormLabel>下签日期</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "lg:w-[240px] w-[200px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}>
                              {field.value ? (
                                format(new Date(field.value), "yyyy-MM-dd")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={
                              field.value ? new Date(field.value) : undefined
                            }
                            onSelect={(date) => {
                              if (date) {
                                field.onChange(format(date, "yyyy-MM-dd")); // 将 Date 对象转换为字符串并存储
                              }
                            }}
                            disabled={(date) =>
                              date > new Date() || date < new Date("2022-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="visaOfficer"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel>哪位好心的签证官</FormLabel>
                      <FormControl>
                        <Input className="lg:w-[240px] w-[200px]" placeholder="" {...field} />
                      </FormControl>
                      <FormDescription>
                        机审秒签的同学这一栏直接跳过即可
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
            
          </div>

          <div className="min-w-full mt-4 lg:mt-0 lg:w-1/2 lg:ml-8">
            <div className="text-2xl font-bold mb-4">Details</div>
            
            <FormField
              control={form.control}
              name="schoolType"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>主申学校</FormLabel>
                  <FormControl>
                    <Input className="lg:w-1/2" placeholder="" {...field} />
                  </FormControl>
                  <FormDescription>可以模糊填写</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            

            <FormField
              control={form.control}
              name="ifDIY"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>DIY / 中介</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex flex-row space-x-3">
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel className="font-normal">DIY</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="false" />
                        </FormControl>
                        <FormLabel className="font-normal">找的中介</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="otherInfo"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>其他信息</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="如: 补材料/defer/小黄旗/催签/COE开学日期"
                      className="resize-none h-[240px] w-full lg:w-1/2   pr-8"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-40 mt-5">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};
