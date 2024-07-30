import React from "react";
// import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectForm() {
  //   const { register, handleSubmit } = useForm();

  //   const onSubmit = (data) => {
  //     console.log(data);
  //     // Handle form submission here
  //   };

  return (
    <Card className='w-full max-w-2xl mx-auto'>
      <CardHeader>
        <CardTitle>Project Form</CardTitle>
      </CardHeader>
      <CardContent>
        <form className='space-y-4'>
          <div>
            <Label htmlFor='title'>Title</Label>
            <Input id='title' />
          </div>

          <div>
            <Label htmlFor='slug'>Slug</Label>
            <Input id='slug' />
          </div>

          <div>
            <Label htmlFor='mainImage'>Main Image</Label>
            <Input id='mainImage' type='file' />
          </div>

          <div>
            <Label htmlFor='location'>Location</Label>
            <Input id='location' />
          </div>

          <div>
            <Label htmlFor='projectClient'>Project Client</Label>
            <Input id='projectClient' />
          </div>

          <div>
            <Label htmlFor='projectSiteArea'>Project Site Area</Label>
            <Input id='projectSiteArea' />
          </div>

          <div>
            <Label htmlFor='projectBuildingArea'>Project Building Area</Label>
            <Input id='projectBuildingArea' />
          </div>

          <div>
            <Label htmlFor='projectDescription1'>Project Description 1</Label>
            <Textarea id='projectDescription1' />
          </div>

          <div>
            <Label htmlFor='projectDescription2'>Project Description 2</Label>
            <Textarea id='projectDescription2' />
          </div>

          <div>
            <Label htmlFor='projectDescription3'>Project Description 3</Label>
            <Textarea id='projectDescription3' />
          </div>

          <div>
            <Label htmlFor='projectGallery'>Project Gallery</Label>
            <Input id='projectGallery' type='file' multiple />
          </div>

          <Button type='submit'>Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
}
