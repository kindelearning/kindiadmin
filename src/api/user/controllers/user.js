module.exports = {
    async updateKid(ctx) {
      try {
        const { userId, kidId } = ctx.params; // Extract user and kid IDs from URL params
        const updatedData = ctx.request.body; // Extract updated data from the request body
  
        // Find the user and populate the myKids relation
        const user = await strapi.entityService.findOne('plugin::users-permissions.user', userId, {
          populate: { myKids: true },
        });
  
        if (!user) {
          return ctx.notFound('User not found');
        }
  
        // Check if the kid belongs to the user
        const kidExists = user.myKids.find((kid) => kid.id === parseInt(kidId, 10));
        if (!kidExists) {
          return ctx.forbidden('Kid does not belong to this user');
        }
  
        // Update the kid data
        const updatedKid = await strapi.entityService.update('api::kid.kid', kidId, {
          data: updatedData,
        });
  
        return ctx.send({ message: 'Kid updated successfully', data: updatedKid });
      } catch (error) {
        console.error('Error updating kid:', error);
        return ctx.internalServerError('An error occurred while updating the kid');
      }
    },
  };
  