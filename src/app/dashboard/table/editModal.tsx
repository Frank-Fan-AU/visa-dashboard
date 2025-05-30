'use client'

import { useEffect, useState } from 'react';
import { Modal} from 'antd'; // 使用 Ant Design 的 Modal 组件
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
  import { format } from "date-fns";
  import { CalendarIcon } from "lucide-react";
  import { cn } from "@/lib/utils";
import { Record } from '@/type/Record';


interface EditModalProps {
    visible:boolean;
    data: any;
    onClose: () => void;
    onOk:(formData:Record) => void
  }
 
const EditModal = ({visible,data,onClose,onOk} : EditModalProps) => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            _id:"",
          ifSubmit:"",
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
        },
      });

      useEffect(()=>{
        form.reset(data)
      },[data,form])
    // 当输入变化时更新formData状态
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData:any) => ({ ...prevData, [name]: value }));
//   };
    const ifGetVisa = form.watch("ifGetVisa");

    // 获取表单中的当前值
  const handleOk = () => {
    const datanow = form.getValues();
    onOk(datanow);
  
  };

  return (
    <Modal
      title="详细信息"
      open={visible}
      onOk={handleOk}
      onCancel={onClose}
      width={1000}
      zIndex={10}
    >
      <Form {...form}>
        <form
          className="flex flex-col lg:flex-row lg:ml-8">
          <div className="lg:min-w-96 lg:border-r-2 lg:border-gray-300">
            <div className="text-2xl font-bold mb-4">General *</div>
            <FormField
              control={form.control}
              name="submitTime"
              render={({ field }) => (
                <FormItem className="mt-4  flex flex-col">
                  <FormLabel>递签日期</FormLabel>
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
                    <PopoverContent className="w-auto p-0 z-50" align="start" forceMount>
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
                  <FormLabel>境内境外递交</FormLabel>
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
                  <FormLabel>是否陪读？</FormLabel>
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
                  <FormLabel>主申专业</FormLabel>
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
                  <FormLabel>本/硕/博</FormLabel>
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
                  <FormLabel>是否已获得签证？</FormLabel>
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
                  <FormLabel>学校:</FormLabel>
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
          </div>
        </form>
      </Form>
      
    </Modal>
  )
};

export default EditModal;
