import { getOrganization } from '@/action/organizations';
import OrgSwitcher from '@/components/org-switcher';
import React from 'react'
import ProjectList from './_components/project-list';
import UserIssues from './_components/user-issues';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const OrganizationPage = async ({params})=> {
    const {orgId} = await params;
    const organization = await getOrganization(orgId);
    const {userId}=auth()
    if(!userId){
        redirect("/sign-in");
    }
    if(!organization){
        return <div>Organization Not Found</div>
    }

  return (
    <div className='container mx-auto'>
        <div className='mb-4 flex flex-col sm:flex-row justify-between items-start'>
            <h1 className='text-5xl font-bold gradient-title pb-2'>
        {organization.name}&rsquo;s Project
            </h1>
            <OrgSwitcher/>
        </div>

        <div className="mb-4"><ProjectList orgId={organization.id}/></div>
        <div className="mt-8"><UserIssues userId={userId}/></div>
    </div>
  )
}

export default OrganizationPage