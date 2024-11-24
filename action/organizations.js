"use server"

import { db } from "@/lib/prisma";

import { auth, clerkClient } from "@clerk/nextjs/server";

export async function getOrganization(slug) {
    const {userId} =  auth();

    
    if(!userId){
        throw new Error('Unauthorized');
    }
    const user = await db.user.findUnique({
        where:{clerkUserId : userId},
    })

    if(!user){
        throw new Error("User Not Found")
    }

    const organization = await clerkClient().organizations.getOrganization({slug,})

    if(!organization){
        return null
    }

    const {data: membership} = await clerkClient().organizations.getOrganizationMembershipList({
        organizationId:organization.id,
    })
    const userMembership = membership.find(
        (member) => member.publicUserData.userId===userId
    )

    if(!userMembership){
        return null;
    }
    return organization;
}

export async function getOrganizationUsers(orgId) {
    const {userId} = auth();
    if (!userId) {
        throw new Error("Unauthorized");
      }
    
      const user = await db.user.findUnique({
        where: { clerkUserId: userId },
      });
    if(!userId){
        throw new Error("User not found");
    }
    const organizationMemberships=await clerkClient().organizations.getOrganizationMembershipList({
        organizationId:orgId,
    })

    const userIds = organizationMemberships.data.map((membership)=>membership.publicUserData.userId);
    const users= await db.user.findMany({
        where:{
            clerkUserId:{
                in:userIds,
            }
        }
    })

    return users;
}