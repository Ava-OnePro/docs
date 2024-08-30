import comp from "/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/poc/huaweicloud-pre-settings.html.vue"
const data = JSON.parse("{\"path\":\"/userguide/poc/huaweicloud-pre-settings.html\",\"title\":\"Huawei Cloud Pre-Settings\",\"lang\":\"en-US\",\"frontmatter\":{\"description\":\"Huawei Cloud Pre-Settings Create Huawei Cloud IAM account for DR purpose Create a Huawei Cloud IAM account with correspinding permissions, detail requirement please refer to bel...\",\"head\":[[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"zh-cn\",\"href\":\"https://vuepress-theme-hope-docs-demo.netlify.app/zh/userguide/poc/huaweicloud-pre-settings.html\"}],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/userguide/poc/huaweicloud-pre-settings.html\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Huawei Cloud Pre-Settings\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Huawei Cloud Pre-Settings Create Huawei Cloud IAM account for DR purpose Create a Huawei Cloud IAM account with correspinding permissions, detail requirement please refer to bel...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-06-26T07:16:28.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.OneProCloud\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-06-26T07:16:28.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Huawei Cloud Pre-Settings\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":\\\"2024-06-26T07:16:28.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.OneProCloud\\\",\\\"url\\\":\\\"https://oneprocloud.com/\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Create Huawei Cloud IAM account for DR purpose\",\"slug\":\"create-huawei-cloud-iam-account-for-dr-purpose\",\"link\":\"#create-huawei-cloud-iam-account-for-dr-purpose\",\"children\":[{\"level\":3,\"title\":\"Create IAM User\",\"slug\":\"create-iam-user\",\"link\":\"#create-iam-user\",\"children\":[]},{\"level\":3,\"title\":\"Granting Authorization to IAM User\",\"slug\":\"granting-authorization-to-iam-user\",\"link\":\"#granting-authorization-to-iam-user\",\"children\":[]},{\"level\":3,\"title\":\"Managing IAM User Access Keys\",\"slug\":\"managing-iam-user-access-keys\",\"link\":\"#managing-iam-user-access-keys\",\"children\":[]},{\"level\":3,\"title\":\"Huawei Cloud IAM Permission Requirements\",\"slug\":\"huawei-cloud-iam-permission-requirements\",\"link\":\"#huawei-cloud-iam-permission-requirements\",\"children\":[]}]},{\"level\":2,\"title\":\"Configure VPC & Subnet\",\"slug\":\"configure-vpc-subnet\",\"link\":\"#configure-vpc-subnet\",\"children\":[]},{\"level\":2,\"title\":\"Create HyperBDR Security Group\",\"slug\":\"create-hyperbdr-security-group\",\"link\":\"#create-hyperbdr-security-group\",\"children\":[{\"level\":3,\"title\":\"Create Security Group Rules\",\"slug\":\"create-security-group-rules\",\"link\":\"#create-security-group-rules\",\"children\":[]}]},{\"level\":2,\"title\":\"Create ECS for HyperBDR\",\"slug\":\"create-ecs-for-hyperbdr\",\"link\":\"#create-ecs-for-hyperbdr\",\"children\":[{\"level\":3,\"title\":\"Log in to the Huawei Cloud Console\",\"slug\":\"log-in-to-the-huawei-cloud-console\",\"link\":\"#log-in-to-the-huawei-cloud-console\",\"children\":[]},{\"level\":3,\"title\":\"Create ECS Cloud Instance based on Configuration Information\",\"slug\":\"create-ecs-cloud-instance-based-on-configuration-information\",\"link\":\"#create-ecs-cloud-instance-based-on-configuration-information\",\"children\":[]}]},{\"level\":2,\"title\":\"Image Download & Upload\",\"slug\":\"image-download-upload\",\"link\":\"#image-download-upload\",\"children\":[{\"level\":3,\"title\":\"Image Download\",\"slug\":\"image-download\",\"link\":\"#image-download\",\"children\":[]},{\"level\":3,\"title\":\"Image Info\",\"slug\":\"image-info\",\"link\":\"#image-info\",\"children\":[]},{\"level\":3,\"title\":\"Upload Image to Huawei Cloud Object Storage\",\"slug\":\"upload-image-to-huawei-cloud-object-storage\",\"link\":\"#upload-image-to-huawei-cloud-object-storage\",\"children\":[]},{\"level\":3,\"title\":\"Import Image\",\"slug\":\"import-image\",\"link\":\"#import-image\",\"children\":[]}]},{\"level\":2,\"title\":\"VPN Setup\",\"slug\":\"vpn-setup\",\"link\":\"#vpn-setup\",\"children\":[]},{\"level\":2,\"title\":\"Create Huawei VPC Endpoint\",\"slug\":\"create-huawei-vpc-endpoint\",\"link\":\"#create-huawei-vpc-endpoint\",\"children\":[{\"level\":3,\"title\":\"Configure DNS Interface Type for Terminal Endpoints\",\"slug\":\"configure-dns-interface-type-for-terminal-endpoints\",\"link\":\"#configure-dns-interface-type-for-terminal-endpoints\",\"children\":[]},{\"level\":3,\"title\":\"Selection of OBS Gateway-type Terminal Endpoint\",\"slug\":\"selection-of-obs-gateway-type-terminal-endpoint\",\"link\":\"#selection-of-obs-gateway-type-terminal-endpoint\",\"children\":[]},{\"level\":3,\"title\":\"Configure VPN local-end OBS gateway\",\"slug\":\"configure-vpn-local-end-obs-gateway\",\"link\":\"#configure-vpn-local-end-obs-gateway\",\"children\":[]}]},{\"level\":2,\"title\":\"Create Huawei VPC Peering\",\"slug\":\"create-huawei-vpc-peering\",\"link\":\"#create-huawei-vpc-peering\",\"children\":[{\"level\":3,\"title\":\"Disaster recovery VPC connected via peering with multiple business VPC\",\"slug\":\"disaster-recovery-vpc-connected-via-peering-with-multiple-business-vpc\",\"link\":\"#disaster-recovery-vpc-connected-via-peering-with-multiple-business-vpc\",\"children\":[]},{\"level\":3,\"title\":\"Disaster recovery VPC peering with multiple business VPCs, as well as peering connections between multiple business VPC\",\"slug\":\"disaster-recovery-vpc-peering-with-multiple-business-vpcs-as-well-as-peering-connections-between-multiple-business-vpc\",\"link\":\"#disaster-recovery-vpc-peering-with-multiple-business-vpcs-as-well-as-peering-connections-between-multiple-business-vpc\",\"children\":[]}]},{\"level\":2,\"title\":\"Test Network Access between VPCs\",\"slug\":\"test-network-access-between-vpcs\",\"link\":\"#test-network-access-between-vpcs\",\"children\":[{\"level\":3,\"title\":\"Test the network connectivity between the disaster recovery VPC and the business VPC\",\"slug\":\"test-the-network-connectivity-between-the-disaster-recovery-vpc-and-the-business-vpc\",\"link\":\"#test-the-network-connectivity-between-the-disaster-recovery-vpc-and-the-business-vpc\",\"children\":[]},{\"level\":3,\"title\":\"Test the network connectivity between business VPC\",\"slug\":\"test-the-network-connectivity-between-business-vpc\",\"link\":\"#test-the-network-connectivity-between-business-vpc\",\"children\":[]}]},{\"level\":2,\"title\":\"Huawei Cloud platform account quota check\",\"slug\":\"huawei-cloud-platform-account-quota-check\",\"link\":\"#huawei-cloud-platform-account-quota-check\",\"children\":[{\"level\":3,\"title\":\"Source host resource inventory\",\"slug\":\"source-host-resource-inventory\",\"link\":\"#source-host-resource-inventory\",\"children\":[]},{\"level\":3,\"title\":\"Huawei Cloud account resource quota check\",\"slug\":\"huawei-cloud-account-resource-quota-check\",\"link\":\"#huawei-cloud-account-resource-quota-check\",\"children\":[]},{\"level\":3,\"title\":\"Increase quotas in your Huawei Cloud account.\",\"slug\":\"increase-quotas-in-your-huawei-cloud-account\",\"link\":\"#increase-quotas-in-your-huawei-cloud-account\",\"children\":[]}]},{\"level\":2,\"title\":\"Modify the ssh policy of the Cloud Sync Gateway instance security group\",\"slug\":\"modify-the-ssh-policy-of-the-cloud-sync-gateway-instance-security-group\",\"link\":\"#modify-the-ssh-policy-of-the-cloud-sync-gateway-instance-security-group\",\"children\":[{\"level\":3,\"title\":\"Confirm the instance of Cloud Sync Gateway\",\"slug\":\"confirm-the-instance-of-cloud-sync-gateway\",\"link\":\"#confirm-the-instance-of-cloud-sync-gateway\",\"children\":[]},{\"level\":3,\"title\":\"Modify the cloud sync gateway security group\",\"slug\":\"modify-the-cloud-sync-gateway-security-group\",\"link\":\"#modify-the-cloud-sync-gateway-security-group\",\"children\":[]}]}],\"git\":{\"createdTime\":1701666457000,\"updatedTime\":1719386188000,\"contributors\":[{\"name\":\"maohongming\",\"email\":\"maohake@sina.com\",\"commits\":14},{\"name\":\"Ray Sun\",\"email\":\"ray.sun@oneprocloud.com\",\"commits\":8},{\"name\":\"CarltonXu\",\"email\":\"hzxuxingzhuang@163.com\",\"commits\":5},{\"name\":\"Ray\",\"email\":\"xiaoquqi@gmail.com\",\"commits\":1},{\"name\":\"XingZhuang Xu\",\"email\":\"CarltonXu@users.noreply.github.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":11.99,\"words\":3596},\"filePathRelative\":\"userguide/poc/huaweicloud-pre-settings.md\",\"localizedDate\":\"December 4, 2023\",\"autoDesc\":true}")
export { comp, data }
