function Error() {
    return <div className="">
       <div class="text-center mt-40">
      <h1 class="mb-4 text-6xl font-semibold text-red-600">500</h1>
      <p class="mb-4 text-lg text-gray-600">Internal Server Error. Something went wrong on our end. Please try again later.</p>
      <div class="animate-bounce">
        <svg class="mx-auto h-16 w-16 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
        </svg>
      </div>
      
    </div>
  </div>
   
  }

export default Error