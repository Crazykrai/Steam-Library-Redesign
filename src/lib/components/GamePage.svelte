<script>
// @ts-nocheck

    import { Button } from "$lib/components/ui/button/index.js";
    import { ScrollArea } from "$lib/components/ui/scroll-area/index.js"
    import * as Tooltip from "$lib/components/ui/tooltip/index.js";
    import { Download } from 'lucide-svelte';
    import { Play } from 'lucide-svelte';
    import { Timer } from 'lucide-svelte';
    import { Settings } from 'lucide-svelte';

    export let selectedGame;
</script>
  
<style>

</style>
  
<div class="game-page grid grid-cols-3">
    <div class="col-span-2 grid grid-flow-row auto-rows-auto">
        <img class="w-full h-80 object-cover" src={selectedGame.bg} alt={selectedGame.name} />
        <div class="flex mt-5 mb-5">
            <div class="flex">
                {#if selectedGame.installed}
                    <Button variant="play" size="play"><Play /> <span style="font-family: 'Inter'; font-size: 20px;">Play</span></Button>
                {:else}
                    <Button variant="install" size="play"><Download /> <span style="font-family: 'Inter'; font-size: 20px;">Install</span></Button>
                {/if}
                <Timer class="h-10 w-10 ml-4 mr-2" />
                <div class="text-filter font-bold" style="margin-top: -4px">
                    <p class="text-base">PLAY TIME</p>
                    <p class="text-xs">60.2 hours</p>
                </div>
                <div class="ml-4"><Button variant="default" size="play">Store Page</Button></div>
                <div class="ml-4"><Button variant="default" size="play">Community Hub</Button></div>
            </div>
            <div class="flex justify-end grow">
                <Button variant="default" size="icon"><Settings /></Button>
            </div>
        </div>

        <div class="grid grid-cols-2 p-5 text-white font-bold bg-recent/40">
            <div>
                <span style="font-family: 'Inter'; font-size: 16px;">Recent Activity - Last Played {selectedGame.lastSession.date}</span>
                <div class="mt-5 grid grid-cols-2 gap-4 w-5/6">
                    <div>
                        <div class="mb-4 p-4 rounded-lg" style="background-color: #373C44;">
                            <p class="text-sm">Duration:</p>
                            <p>{selectedGame.lastSession.duration} hours</p>
                        </div>
                        <div class="p-4 rounded-lg" style="background-color: #373C44;">
                            <p class="text-sm">Screenshots:</p>
                            <p>{selectedGame.lastSession.screenshots} taken</p>
                        </div>
                    </div>

                    <div>
                        <div class="mb-4 p-4 rounded-lg" style="background-color: #373C44;">
                            <p class="text-sm">Achievements:</p>
                            <p>{selectedGame.lastSession.unlocked} unlocked</p>
                        </div>

                        <div class="p-4 rounded-lg" style="background-color: #373C44;">
                            <p class="text-sm">Played with:</p>
                            <p>{selectedGame.lastSession.friends} friends</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="p-4 rounded-lg h-full" style="background-color: #373C44;">
                    <p class="text-base">Summary:</p>
                    {#each selectedGame.lastSession.summary as entry}
                        <p class="text-sm">{entry}</p>
                    {/each}
                </div>
            </div>
        </div>
    </div>

    <div class="ml-4 grid grid-flow-row auto-rows-min gap-4 text-white font-bold">
        <div class="p-4 bg-recent/40">
            <p class="text-base mb-4">Friend Activity</p>
            <ScrollArea class="rounded-md border border-black border-2" orientation="horizontal">
                <div class="p-2">
                    <p class="text-sm">Currently Playing:</p>
                    <div class="flex w-full space-x-4">
                        {#each selectedGame.friends.playing as friend}
                        <Tooltip.Provider>
                            <Tooltip.Root>
                              <Tooltip.Trigger><span style="font-size: 0px;">test</span><image class="h-8" style="margin-top:-12px" src="{friend.avatar}"/></Tooltip.Trigger
                              >
                              <Tooltip.Content>
                                <p>{friend.name}</p>
                              </Tooltip.Content>
                            </Tooltip.Root>
                          </Tooltip.Provider>
                        {/each}
                    </div>
                </div>
                
            </ScrollArea>

            <ScrollArea class="rounded-md border border-black border-2 mt-4" orientation="horizontal">
                <div class="p-2">
                    <p class="text-sm">Played Previously:</p>
                    <div class="flex w-full space-x-4">
                        {#each selectedGame.friends.previous as friend}
                        <Tooltip.Provider>
                            <Tooltip.Root>
                              <Tooltip.Trigger><span style="font-size: 0px">test</span><image class="h-8" style="margin-top:-12px" src="{friend.avatar}"/></Tooltip.Trigger
                              >
                              <Tooltip.Content>
                                <p>{friend.name}</p>
                              </Tooltip.Content>
                            </Tooltip.Root>
                          </Tooltip.Provider>
                        {/each}
                    </div>
                </div>
                
            </ScrollArea>
        </div>
        <div class="p-4 bg-recent/40">
            <p class="text-base mb-4">Achievements</p>
            <ScrollArea class="rounded-md border border-black border-2" orientation="horizontal">
                <div class="p-2">
                    <p class="text-sm">Locked:</p>
                    <div class="flex w-full space-x-4">
                        {#each selectedGame.achievements.locked as achievement}
                        <Tooltip.Provider>
                            <Tooltip.Root>
                              <Tooltip.Trigger><span style="font-size: 0px">test</span><image class="h-8" style="margin-top:-12px" src="{achievement.badge}"/></Tooltip.Trigger
                              >
                              <Tooltip.Content>
                                <p>{achievement.name}</p>
                                <p>{achievement.description}</p>
                              </Tooltip.Content>
                            </Tooltip.Root>
                          </Tooltip.Provider>
                        {/each}
                    </div>
                </div>
                
            </ScrollArea>

            <ScrollArea class="rounded-md border border-black border-2 mt-4" orientation="horizontal">
                <div class="p-2">
                    <p class="text-sm">Unlocked:</p>
                    <div class="flex w-full space-x-4">
                        {#each selectedGame.achievements.unlocked as achievement}
                        <Tooltip.Provider>
                            <Tooltip.Root>
                              <Tooltip.Trigger><span style="font-size: 0px">test</span><image class="h-8" style="margin-top:-12px" src="{achievement.badge}"/></Tooltip.Trigger
                              >
                              <Tooltip.Content>
                                <p>{achievement.name}</p>
                                <p>{achievement.description}</p>
                              </Tooltip.Content>
                            </Tooltip.Root>
                          </Tooltip.Provider>
                        {/each}
                    </div>
                </div>
                
            </ScrollArea>
        </div>
        <div class="p-4 bg-recent/40">
            <p class="text-base mb-1">DLC</p>
            <ScrollArea orientation="horizontal">
                <div class="flex w-full space-x-4">
                    {#each selectedGame.dlc as dlc}
                    <Tooltip.Provider>
                        <Tooltip.Root>
                          <Tooltip.Trigger><span style="font-size: 0px">test</span><image class="h-16" style="margin-top:-12px" src="{dlc.image}"/></Tooltip.Trigger
                          >
                          <Tooltip.Content>
                            <p>{dlc.name}</p>
                          </Tooltip.Content>
                        </Tooltip.Root>
                      </Tooltip.Provider>
                    {/each}
                </div>
            </ScrollArea>
        </div>
    </div>
</div>