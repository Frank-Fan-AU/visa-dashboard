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
import { newFormSchema } from "@/lib/schema";
import { z } from "zod";

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof newFormSchema>>({
    resolver: zodResolver(newFormSchema),
    defaultValues: {
      ifSubmit: "",
      submitTime: "",
      submitPlace: "",
      ifGetVisa: "",
      getVisaTime: "",
      visaOfficer: "",
      ifIncludedCouple: "",
      ifTogether: "",
      major: "",
      majorType: "",
      educationLevel: "",
      schoolType: "",
      ifDIY: "",
      isUser: "",
      infoFrom: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof newFormSchema>) {
    // Do something with the form values.
    console.log("Form data:", values);
    // ✅ This will be type-safe and validated.
     const response =  await fetch("/api/visaTable", {
        method: "POST",
        body:JSON.stringify(values),
        headers:{
          "Content-Type":"application/json"
        }
      })
      if(!response.ok){
        alert('Submit failed')
        return
      }else{
        alert('Submit success')
      }
      form.reset()
  }

  //Define a watch
  const ifSubmit = form.watch("ifSubmit");
  const ifGetVisa = form.watch("ifGetVisa");
  const ifIncludedCouple = form.watch("ifIncludedCouple");
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-row   ">
        <div className="w-1/3 border-r-2 border-gray-300  p-4">
          <FormField
            control={form.control}
            name="ifSubmit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>是否已提交签证？</FormLabel>
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
          {ifSubmit === "true" && (
            <>
              <FormField
                control={form.control}
                name="submitTime"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>递签时间</FormLabel>
                    <FormControl>
                      <Input
                        className="w-60"
                        placeholder="yyyy-mm-dd"
                        {...field}
                      />
                    </FormControl>
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
                            <RadioGroupItem value="境内递交" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            境内递交
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-1 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="境外递交" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            境外递交
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
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
                  <FormItem className="mt-4">
                    <FormLabel>下签时间</FormLabel>
                    <FormControl>
                      <Input
                        className="w-60"
                        placeholder="yyyy-mm-dd"
                        {...field}
                      />
                    </FormControl>
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
                      <Input className="w-60" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
          <FormField
            control={form.control}
            name="ifIncludedCouple"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel>是否含陪读？</FormLabel>
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
          {ifIncludedCouple === "true" && (
            <FormField
              control={form.control}
              name="ifTogether"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>分开递还是一起递的</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex flex-row space-x-3">
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel className="font-normal">分开递</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="false" />
                        </FormControl>
                        <FormLabel className="font-normal">一起递</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>

        <div className="w-1/2 ml-8">
          <FormField
            control={form.control}
            name="major"
            render={({ field }) => (
              <FormItem >
                <FormLabel>主申专业</FormLabel>
                <FormControl>
                  <Input className="w-1/2" placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="majorType"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel>专业类别：三宝/其他</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
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
            name="educationLevel"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel>本/硕/博</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
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
            name="schoolType"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel>学校类别：八大/其他</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
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
                      <FormLabel className="font-normal">中介</FormLabel>
                    </FormItem>
                  </RadioGroup>
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
  );
}
